const https = require('https');
const req = https.request('https://edraarsitek.co.id/api/media', { method:'POST', headers:{'Content-Type':'application/json'} }, (res)=>{
  let body='';
  res.on('data',c=>body+=c);
  res.on('end',()=>{
    console.log('POST status', res.statusCode);
    console.log(body.slice(0,300));
  });
});
req.on('error',e=>{ console.error(e.message); });
req.write(JSON.stringify({}));
req.end();
