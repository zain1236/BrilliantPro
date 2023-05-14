const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  collectionName: String,
  documentId: mongoose.Schema.Types.ObjectId,
  action: String,
  oldData: Object,
  newData: Object
},{timestamps : true});

const AuditTrail = mongoose.model('AuditTrail', auditTrailSchema);
module.exports = AuditTrail;
