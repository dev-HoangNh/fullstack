import db from "../models";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId);

        // let UserData
        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send('edit crud')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD
}