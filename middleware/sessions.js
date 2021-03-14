module.exports = {
    getAllSessions: function (req, res) {
        let activeSessions = [];
        for (sessionId in req.sessionStore.sessions) {
            // console.log(sessionId)
            // console.log(JSON.parse(req.sessionStore.sessions[sessionId]).passport.user )
            activeSessions.push(
                { sessionId: sessionId, userId: JSON.parse(req.sessionStore.sessions[sessionId]).passport.user }
            )
        }
        return activeSessions;
    },
    revokeSession: function (sessionId, req, res) {
        //console.log(req.query.sessionId);
        //console.log(req.sessionStore)
        //delete req.sessionStore.sessions[req.query.sessionId];
        delete req.sessionStore.sessions[sessionId];
    }
}
