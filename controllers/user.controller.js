const users = [
    { id: 1, name: "Alice"},
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]

exports.getUser = ((req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);
    console.log(user);
    res.status(200).json({ success: true, message: "User fetched", username: user.name });
});

exports.getAllUsers = ((req, res) => {
    for (const user of users) {
        console.log(user)
    }
});