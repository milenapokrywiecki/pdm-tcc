const mongoose = require('mongoose');
const Relatorio = mongoose.model('Relatorio');
const Aluno = mongoose.model('Aluno');

module.exports = {
    async index(req, res) { //listar tudo
        const { page = 1 } = req.query;
        const alunos = await Aluno.paginate({}, { page, limit: 10 });
        const relatorios = await Relatorio.paginate({}, {page, limit: 10} )
//      const alunos = await Aluno.find();

        return res.json(alunos);
    },
    async index(req, res) { //listar todos os relatorios
        const { page = 1 } = req.query;
        const relatorios = await Relatorio.paginate({}, {page, limit: 10} )

        return res.json(relatorios);
    },
    
    async show(req, res) { //listar
        const aluno = await Aluno.findById(req.params.id);//parametro é o id

        return res.json(aluno);
    },

    async store(req, res) { //criar
        const aluno = await Aluno.create(req.body);

        return res.json(aluno);
    },

    async store(req, res) { //criar relatorio
        const relatorio = await Relatorio.create(req.body);

        return res.json(relatorio);
    },
}