let db = new Dexie("/idbfs");
db.open();
var new_zip = new JSZip(),
  importZIP = document.createElement("input");
function progressCallback({ totalRows: e, completedRows: o }) {
  console.log(`Progress: ${o} of ${e} rows completed`);
}
(importZIP.type = "file"),
  (importZIP.accept = "application/zip"),
  (importZIP.onchange = function (e) {
    for (var o, t = e.target.files, n = 0; n < t.length; n++)
      (o = t[n]),
        JSZip.loadAsync(o)
          .then(function (e) {
            try {
                
              return e.files["indexedDB.json"].async("blob");
            } catch (e) {
              console.log(
                "IndexedDB: No such file found. Data was not imported."
              );
            }
          })
          .then(function (e) {
            try {
              db.delete(),
                (db = Dexie.import(e, { progressCallback: progressCallback }));
            } catch (e) {
              console.log("IndexedDB: error.");
            }
          }),
        JSZip.loadAsync(o)
          .then(function (e) {
            try {
              return e.files["localStorage.json"].async("text");
            } catch (e) {
              $("#importFailedModal").modal("show");
            }
          })
          .then(function (e) {
            var o = JSON.parse(e);
            Object.keys(o).forEach(function (e) {
              localStorage.setItem(e, o[e]);
            }),
              $("#importModal").modal("show"),
              setTimeout(function () {
                window.location.reload(1);
              }, 3e3);
          });
  }),
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("exportLink");
    document.getElementById("downloadZIP").onclick = async () => {
      const e = new JSZip(),
        o = JSON.stringify(localStorage);
      e.file("localStorage.json", o);
      try {
        const o = await db.export();
        e.file("indexedDB.json", o);
      } catch (e) {
        console.log("No IndexedDB data, skipping...");
      }
      e.generateAsync(
        {
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: { level: 5 },
        },
        function (e) {
          console.log("Progress: " + e.percent.toFixed(0) + " %"),
            $("#progressModal").modal("show");
        }
      ).then(function (e) {
        download(e, "data-emulatoros.zip");
      });
    };
  });
