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
  const a = await get('https://edraarsitek.co.id/api/media?limit=1');
  console.log('GET /api/media status', a.status);
  const json = JSON.parse(a.body);
  const doc = json?.docs?.[0] || null;
  console.log('doc_count', json?.docs?.length || 0);
  console.log('sample_url', doc?.url || null);
})();
