const uses = require("../data/uses-data");
const urls = require("../data/urls-data");
const pathNotFound = require("../errors/pathNotFound");

const collectParams = (req, res, next) => {
  const { urlId = null } = req.params;
  const { useId = null } = req.params;
  if (useId === null) {
    return pathNotFound(req, res, next);
  }
  res.locals.urlId = Number(urlId);
  res.locals.useId = Number(useId);
  next();
};

const paramsExist = (req, res, next) => {
  let foundUse;
  const useId = res.locals.useId;
  const urlId = res.locals.urlId;
  if (!urlId) {
    foundUse = uses.find((use) => use.id === useId);
  } else {
    foundUse = uses.find((use) => use.id === useId && use.urlId === urlId);
    if (foundUse)
      res.locals.urlUses = uses.filter((use) => use.urlId === res.locals.urlId);
  }
  if (!foundUse) {
    return pathNotFound(req, res, next);
  }
  res.locals.use = foundUse;
  next();
};

function list(req, res) {
  if (res.locals.urlUses) {
    res.status(200).json({ data: res.locals.urlUses });
  }
  res.status(200).json({ data: uses });
}

function read(req, res) {
  if (res.locals.urlUses) {
  }
  res.status(200).json({ data: res.locals.use });
}

function destroy(req, res) {
  const index = uses.findIndex((use) => use.id === res.locals.useId);
  uses.splice(index, 1);
  res.sendStatus(204);
}

module.exports = {
  read: [collectParams, paramsExist, read],
  delete: [collectParams, paramsExist, destroy],
  list,
};
