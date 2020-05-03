let email = require('./modelos/orcamento');
const nodemailer = require("nodemailer");

const id = Math.random().toString(36).substr(2, 9);
let preview = "Erro"

async function preparaEmail(params){
  let data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
      hora = data.getHours();
      minuto = data.getMinutes();
      data = diaF+"/"+mesF+"/"+anoF+" ás "+hora+":"+minuto;

  let tipo = "Orçamento";
  let itens = JSON.stringify(params.itens) || "itens";
  let dados = JSON.stringify(params.dados) || "dados em html";
  let endereco = JSON.stringify(params.endereco) || "endereco em html";

  email = email.replace('{{tipo}}', tipo);
  email = email.replace('{{id}}', id);
  email = email.replace('{{data}}', data);
  email = email.replace('{{itens}}', itens);
  email = email.replace('{{dados}}', dados);
  email = email.replace('{{entrega}}', endereco);
}
async function emailTXT(html){
  html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
  html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
  html = html.replace(/<\/div>/ig, '\n');
  html = html.replace(/<\/li>/ig, '\n');
  html = html.replace(/<li>/ig, '  *  ');
  html = html.replace(/<\/ul>/ig, '\n');
  html = html.replace(/<\/p>/ig, '\n');
  html = html.replace(/<br\s*[\/]?>/gi, "\n");
  html = html.replace(/<[^>]+>/ig, '');

  return html
}

async function enviaEmail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'kyra.russel@ethereal.email', // generated ethereal user
      pass: 'frQ6nXZTNue2VH1vm9' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Teste" <foo@example.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "Teste", // Subject line
    text: await emailTXT(email), // plain text body
    html: email // html body
  });

  preview = nodemailer.getTestMessageUrl(info);
}

exports.handler = async (event, context) => {
  let params = event.queryStringParameters
  let response
  if (params.payload) {
    let payload = JSON.parse(params.payload);
    await preparaEmail(payload);
    await enviaEmail();
    response = {
      id: id,
      payload: payload,
      preview: preview
    }
  }else{
    response = {
      erro: "Payload incompleto"
    }
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
