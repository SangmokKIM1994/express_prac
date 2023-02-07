const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
    res.send('get은 무엇인가 가져올때 많이쓰지!!!');
});

router.post('/', (req,res) => {
    res.send('post는 무엇인가 생성할때 많이 쓰지!!')
})

router.put('/user',(req,res) => {
    res.send('put은 고치는 것이지!!')
})

router.delete('/user',(req,res) => {
    res.send('delete는 지울때 쓴다고 기억해')
})



module.exports = router;