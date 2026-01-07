const toString = (any) => {
  const s = String(any);
  return s.includes("[object Object]") ? JSON.stringify(any) : s;
}
const log = (...any) => post(...any.map(toString), "\n");
const error = (...any) => globalThis.error(...any.map(toString), "\n");
log("------------------------------------------------,\n", new Date());
var id = 2;

function setidx(i) {
  id = i;
  log("setting id:", id);
}

function setid(myid) {
log("thisid", myid);
const liveObject = new LiveAPI(sample_callback, myid);

    log("path:", liveObject.path);
    log("id:", liveObject.id);
    //log("children:", liveObject.children);
    //log("info:", liveObject.info);
    //log("devtype", liveObject.get("class_name"))
    //log("children:", liveObject.children.parameters);
    //log("type:", liveObject.type);
    //log("name:", liveObject.get("name"));


      var dp = liveObject.children.parameters;
    log("parameter:", dp);
    //var o = p.firstobject;
    //log("maxobj:", o.getattr("valid"));
    /*var o = patcher.getnamed("baba");
    var n = o.getattr("class_display_name");
    log("name:", n);*/
}

function sample_callback(args) {
    post("callback called with arguments:", args, "\n");
}