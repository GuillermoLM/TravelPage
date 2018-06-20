const Controller = require('./controller');
const TravelsModels = require('../models/travelsModel');


class homeController extends Controller
{
   constructor(req, res ,next)
   {
       super(req, res ,next)
   }
   index()
   {

        let travelsModels = new TravelsModels();
        travelsModels.showTravels(travels=>{
            this.res.render('index', {
                title: 'TravelPage'
            , travels});
        });
       
        
   }
}

module.exports = homeController;