$("#weaad-submit").on("click", (e) => {
  e.preventDefault();
  // $('#weaad-submit-form').validate()

  let path = window.location;
  // path = path.replaceAll("/", "");
  var form = new FormData();
  form.append("action", "weaad_form");
  form.append("email", $('input[name="weaad-email"]').val());
  form.append("name", $('input[name="weaad-name"]').val());
  form.append("phone", $('input[name="weaad-phone"]').val());
  form.append("consent", $('input[name="weaad-consent"]').prop("checked"));
  form.append("location", path);
  console.log(form);

  var settings = {
    url: "https://www.helpageindia.org/wp-admin/admin-ajax.php",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    const status = JSON.parse(response).status ? "true" : "false";
    localStorage.setItem("weaad", status);
    if(status == 'true'){
      $('#modalWeaad').css('display','none');
      window.location.reload()
    }
  });
});
