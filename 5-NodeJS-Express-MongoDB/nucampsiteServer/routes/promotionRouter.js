const express = require('express');
const bodyParser = require('body-parser');
const Promotion = require('../models/promotion')

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter
  .route('/')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Promotion.find()
      .then(promotions => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
      })
      .catch((err) => next(err));
    // res.end('Will send all the promotions to you');
  })
  .post((req, res, next) => {
    Promotion.create(req.body)
      .then(promotion => {
        console.log('Promotion Created ', promotion);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
      })
      .catch(err => next(err));
    // res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res) => {
    Promotion.deleteMany()
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
    // res.end('Deleting all promotions');
  });

promotionRouter
  .route('/:promotionId')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Promotion.findById(req.params.promotionId)
      // res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
      .then(promotion => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
      })
      .catch(err => next(err));
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotions/${req.params.promotionId}`
    );
  })

  .put((req, res, next) => {
    Promotion.findByIdAndUpdate(
      req.params.promotionId,
      {
        $set: req.body
      },
      { new: true }
    )
      .then(promotion => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
      })
      .catch(err => next(err));
    // res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    // res.end(`Will update the promotion: ${req.body.name}
    //     with description: ${req.body.description}`);
  })

  .delete((req, res, next) => {
    Promotion.findByIdAndDelete(req.params.promotionId)
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
    // res.end(`Deleting promotion: ${req.params.promotionId}`);
  });

  promotionRouter
  .route('/:promotionId/comments')
  // .all((req, res, next) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   next();
  // })
  .get((req, res, next) => {
    Promotion.findById(req.params.promotionId)
      .then(promotion => {
        if (promotion) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promotions);

        } else {
          err = new Error(`Promotion ${req.params.promotionId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
    // res.end('Will send all the promotions to you');
  })
  .post((req, res, next) => {
    Promotion.findById(req.params.promotionId)
      .then(promotion => {
        if (promotion) {
          promotion.comments.push(req.body);
          promotion.save()
          .then(promotion => {
            // console.log('Promotion Created ', promotion);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);

          })
          .catch(err => next(err));
        } else {
          err = new Error(`Promotion ${req.params.promotionId} not found`);
          err.status = 404;
          return next(err)
        }
      })
      .catch(err => next(err));
    // res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res, next) => {
    Promotion.findById(req.params.promotionId)
      .then(promotion => {
        if (promotion) {
          for (let i = (promotion.comments.length-1); i >= 0; i--) {
              promotion.comments.id(promotion.comments[i]._id).remove();
          }
          promotion.save()
          .then(promotion => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);

          })
          .catch(err => next(err));
        } else {
          err = new Error(`Promotion ${req.params.promotionId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
    // res.end('Deleting all promotions');
  });

  promotionRouter.route('/:promotionId/comments/:commentId')
.get((req, res, next) => {
    Promotion.findById(req.params.promotionId)
    .then(promotion => {
        if (promotion && promotion.comments.id(req.params.commentId)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion.comments.id(req.params.commentId));
        } else if (!promotion) {
            err = new Error(`Promotion ${req.params.promotionId} not found`);
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
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}/comments/${req.params.commentId}`);
})
.put((req, res, next) => {
    Promotion.findById(req.params.promotionId)
    .then(promotion => {
        if (promotion && promotion.comments.id(req.params.commentId)) {
            if (req.body.rating) {
                promotion.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.text) {
                promotion.comments.id(req.params.commentId).text = req.body.text;
            }
            promotion.save()
            .then(promotion => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotion);
            })
            .catch(err => next(err));
        } else if (!promotion) {
            err = new Error(`Promotion ${req.params.promotionId} not found`);
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
    Promotion.findById(req.params.promotionId)
    .then(promotion => {
        if (promotion && promotion.comments.id(req.params.commentId)) {
            promotion.comments.id(req.params.commentId).remove();
            promotion.save()
            .then(promotion => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotion);
            })
            .catch(err => next(err));
        } else if (!promotion) {
            err = new Error(`Promotion ${req.params.promotionId} not found`);
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

module.exports = promotionRouter;


// const express = require('express');
// const bodyParser = require('body-parser');

// const promotionRouter = express.Router();

// promotionRouter.use(bodyParser.json());

// promotionRouter
//   .route('/')
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//   })
//   .get((req, res) => {
//     res.end('Will send all the promotions to you');
//   })
//   .post((req, res) => {
//     res.end(
//       `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
//     );
//   })
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /promotions');
//   })
//   .delete((req, res) => {
//     res.end('Deleting all promotions');
//   });

// promotionRouter
//   .route('/:promotionId')
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
//   })
//   .get((req, res) => {
//     res.end(
//       `Will send details of the promotion: ${req.params.promotionId} to you`
//     );
//   })

//   .post((req, res) => {
//     res.statusCode = 403;
//     res.end(
//       `POST operation not supported on /promotions/${req.params.promotionId}`
//     );
//   })

//   .put((req, res) => {
//     res.write(`Updating the promotion: ${req.params.promotionId}\n`);
//     res.end(`Will update the promotion: ${req.body.name}
//         with description: ${req.body.description}`);
//   })

//   .delete((req, res) => {
//     res.end(`Deleting promotion: ${req.params.promotionId}`);
//   });

// module.exports = promotionRouter;
