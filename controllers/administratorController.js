const Controller = require('./controller');
const TravelsModel = require ('../models/travelsModel');


class administratorController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
    }

    show()
    {

    }

    index()
    {
        let travelsModels = new TravelsModel();
        travelsModels.showTravels(travels=>{
            this.res.render('admin', {title: "Administrador", layout: "layout-small", travels});
        });
        
    }
}

module.exports = administratorController;