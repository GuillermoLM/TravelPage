const Controller = require('./controller');


class homeController extends Controller
{
   constructor(req, res ,next)
   {
       super(req, res ,next)
   }
   index()
   {
       this.res.render('index', {
           title: 'TravelPage'
       });
   }
}

module.exports = homeController;