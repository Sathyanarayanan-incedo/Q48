var resources = [
    {id:1, name:"Ram", role:"Engineer"},
    {id:2, name:"Sam", role:"Engineer"},
    {id:3, name:"Riya", role:"Lead"},
    {id:4, name:"Sita", role:"Lead"}
];

module.exports.getAllEmployees = async (req,res,next) => {
    res.send(resources);
}

module.exports.getEmployeeById = async (req,res,next) => {
    var id = parseInt(req.params.id);
    res.send(resources[resources.findIndex(element => element.id === id)]);
}