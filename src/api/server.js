// use local values instead of a server
const serverUrl = "https://example.com/";

const demoData = [
  {
    userId: 1,
    id: 1,
    title: "Title 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    userId: 1,
    id: 2,
    title: "Title 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    userId: 1,
    id: 3,
    title: "Title 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export const getData = function (req, cb) {

  // Demo only
  cb(demoData, null);
  return;
  // Demo only

  let url = serverUrl + "posts";
  let data = {}; // params when needed.

  getRequest(url, data, function (data, err) {

    let ret = null;

    if(!err && data){
      ret = new Location(data);
    }

    cb(ret, err);
  });

}

function getRequest (url, reqData, cb) {

  $.ajax({
    url: url,
    type: 'POST',
    data: reqData,
    dataType: 'json',
    success: function (data) {
      cb(data, null);
    },
    error: function (request, error) {
      var err = request.hasOwnProperty('responseJSON') ? request.responseJSON : null;
      cb(null, err);
    }
  })
}