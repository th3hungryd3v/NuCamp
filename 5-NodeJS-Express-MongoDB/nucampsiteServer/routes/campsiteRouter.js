const express = require('express');
const bodyParser = require('body-parser');
const Campsite = require('../models/campsite');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter
  .route('/')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Campsite.find()
      .then(campsites => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsites);
      })
      .catch((err) => next(err));
    // res.end('Will send all the campsites to you');
  })
  .post((req, res) => {
    Campsite.create(req.body)
      .then(campsite => {
        console.log('Campsite Created ', campsite);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
      })
      .catch((err) => next(err));
    // res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
  })
  .delete((req, res) => {
    Campsite.deleteMany()
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
    // res.end('Deleting all campsites');
  });

campsiteRouter
  .route('/:campsiteId')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
      // res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
      .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
      })
      .catch((err) => next(err));
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /campsites/${req.params.campsiteId}`
    );
  })

  .put((req, res, next) => {
    Campsite.findByIdAndUpdate(
      req.params.campsiteId,
      {
        $set: req.body
      },
      { new: true }
    )
      .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
      })
      .catch((err) => next(err));
    // res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    // res.end(`Will update the campsite: ${req.body.name}
    //     with description: ${req.body.description}`);
  })

  .delete((req, res, next) => {
    Campsite.findByIdAndDelete(req.params.campsiteId)
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
    // res.end(`Deleting campsite: ${req.params.campsiteId}`);
  });

  campsiteRouter
  .route('/:campsiteId/comments')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
      .then(campsite => {
        if (campsite) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(campsites);

        } else {
          err = new Error(`Campsite ${req.params.campsiteId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
    // res.end('Will send all the campsites to you');
  })
  .post((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
      .then(campsite => {
        if (campsite) {
          campsite.comments.push(req.body);
          campsite.save()
          .then(campsite => {
            // console.log('Campsite Created ', campsite);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite);

          })
          .catch((err) => next(err));
        } else {
          err = new Error(`Campsite ${req.params.campsiteId} not found`);
          err.status = 404;
          return next(err)
        }
      })
      .catch(err => next(err));
    // res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
  })
  .delete((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
      .then(campsite => {
        if (campsite) {
          for (let i = (campsite.comments.length-1); i >= 0; i--) {
              campsite.comments.id(campsite.comments[i]._id).remove();
          }
          campsite.save()
          .then(campsite => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite);

          })
          .catch((err) => next(err));
        } else {
          err = new Error(`Campsite ${req.params.campsiteId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
    // res.end('Deleting all campsites');
  });

  campsiteRouter.route('/:campsiteId/comments/:commentId')
.get((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        if (campsite && campsite.comments.id(req.params.commentId)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campsite.comments.id(req.params.commentId));
        } else if (!campsite) {
            err = new Error(`Campsite ${req.params.campsiteId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}/comments/${req.params.commentId}`);
})
.put((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        if (campsite && campsite.comments.id(req.params.commentId)) {
            if (req.body.rating) {
                campsite.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.text) {
                campsite.comments.id(req.params.commentId).text = req.body.text;
            }
            campsite.save()
            .then(campsite => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(campsite);
            })
            .catch(err => next(err));
        } else if (!campsite) {
            err = new Error(`Campsite ${req.params.campsiteId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        if (campsite && campsite.comments.id(req.params.commentId)) {
            campsite.comments.id(req.params.commentId).remove();
            campsite.save()
            .then(campsite => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(campsite);
            })
            .catch(err => next(err));
        } else if (!campsite) {
            err = new Error(`Campsite ${req.params.campsiteId} not found`);
            err.status = 404;
            return next(err);
        } else {
            err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
});

module.exports = campsiteRouter;

// const express = require('express');
// const bodyParser = require('body-parser');
// const Campsite = require('../models/campsite');

// const campsiteRouter = express.Router();

// campsiteRouter.use(bodyParser.json());

// campsiteRouter
//   .route('/')
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//   })
//   .get((req, res) => {
//     res.end('Will send all the campsites to you');
//   })
//   .post((req, res) => {
//     res.end(
//       `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
//     );
//   })
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /campsites');
//   })
//   .delete((req, res) => {
//     res.end('Deleting all campsites');
//   });

// campsiteRouter
//   .route('/:campsiteId')
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//   })
//   .get((req, res) => {
//     res.end(
//       `Will send details of the campsite: ${req.params.campsiteId} to you`
//     );
//   })

//   .post((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `POST operation not supported on /campsites/${req.params.campsiteId}`
//     );
//   })

//   .put((req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//         with description: ${req.body.description}`);
//   })

//   .delete((req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
//   });

// module.exports = campsiteRouter;
