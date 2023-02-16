const userDAO = require('./userDAO');
const jwt = require('../../util/jwt');

exports.signup = async (req, res) => {
    console.log(req.body);
    await userDAO.signup(req.body);
    res.send("Sign Up");
}

exports.login = async (req, res) => {
    console.log(req.body);

    const id = req.body.id;
    const password = req.body.password;
    const activated = req.body.activated;

    if (await userDAO.isContain({ id, activated })) {
        if (await userDAO.isContain({ id, password, activated })) {
            const user = await userDAO.getUser({id});
            const name = user.name;
            const accessToken = jwt.getToken({id});
            res.status(200).send({ name, accessToken}); // 로그인 성공
        } else {
            res.status(401).send({ message: "mismatch" }); // 로그인 실패: 비밀번호 오류인 경우
        }
    } else {
        if (activated === "admin") {
            res.status(401).send({ message: "notadmin" }); // 로그인 실패: 관리자 계정이 아닌 경우
        }
        else if (activated === "user") {
            res.status(401).send({ message: "notuser" }); // 로그인 실패: 사용자 계정이 아닌 경우
        }
    }
}