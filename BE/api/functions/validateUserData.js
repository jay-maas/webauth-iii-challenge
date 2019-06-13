module.exports = async function validateContextId(req, res, next) {
    const context = await contextsModel.findById(req.params.id)
    if (context) {
        req.context = context
        next()
    } else {
        res.status(404).json({
            error: "Could not find a context by that ID"
        })
    }
}

function validateContext(req, res, next) {
    if (!isEmpty(req.body)) {
        if (req.body.name) {
            req.contextValid = {
                name: req.body.name
            }
            next()
        } else {
            res.status(400).json({
                errorMessage: 'Missing required name. Please do not submit any other key:values in this post request!'
            })
        }
    } else {
        res.status(400).json({
            errorMessage: 'Missing context data.'
        })
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)
        )
            return false
    }
    return true
}