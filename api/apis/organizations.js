const express = require('express');
const Router = express.Router();
let Organization = require('../schema/Organization');

//NOTE  Organization route
Router.post('/', function(req, res) {
    let organization = new Organization(req.body);
    organization.save()
        .then(reg => {
            res.send({data: reg});
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Failed to store to database");
        });
});

Router.get("/", async (req, res) =>  {
    const organizations = await Organization.find({})
    res.status(400).send({
        organizations
    });
});

Router.get("/:orgId", async (req, res) =>  {
    const { orgId } = req.params;
    const organizations = await Organization.findById(orgId)
    res.status(400).send({
        organizations
    });
});

module.exports = Router;