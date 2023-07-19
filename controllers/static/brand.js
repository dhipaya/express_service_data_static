// const Amphur = require("../../models").Amphur; //imported fruits array
const MT_Brand = require("../../models").MT_Brand
const { Op } = require("sequelize");
//handle index request
const showAll = (req,res) =>{
    MT_Brand.findAll({
      attributes: ['BRANDCODE','BRANDNAME']
    }).then((brand)=>{
        res.json(brand);
    })
}

// const showAllinProvince = (req, res) => {
//   Amphur.findAll ({
//     attributes: ['amphurid', 't_amphurname','e_amphurname','provinceid'],
//     where: {
//         provinceid: req.params.index
//     }
//   }).then((amphur) => {
//     res.json(amphur);
//   });
// };

const searchByinBrand = (req,res)=>{
  Amphur.findAll({
    attributes: ['BRANDCODE','BRANDNAME'],
    where: {
        provinceid: req.params.index,
      [req.params.para] :{
        [Op.like]:'%'+ req.params.value +'%'
      }
    }
  }).then((amphur) => {
    res.json(amphur);
  });
}


module.exports = {
  showAll,
  showAllinProvince,
  searchByinProvince
  // postCar,
  // removeCar,
  // editCar,
};