const https = require('https');
function get(url){
  return new Promise((resolve,reject)=>{
    https.get(url,(res)=>{
      let body='';
      res.on('data',c=>body+=c);
      res.on('end',()=>resolve({status:res.statusCode, body}));
    }).on('error',reject);
  });
}
(async()=>{
  const a = await get('https://edraarsitek.co.id/api/media?limit=3&sort=-createdAt');
  console.log('status', a.status);
  const json = JSON.parse(a.body);
  const docs = json?.docs || [];
  for (const d of docs) {
    console.log(`${d.id} | ${d.filename} | ${d.url}`);
  }
})();
