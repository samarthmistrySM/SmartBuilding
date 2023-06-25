const API_URL = "http://localhost:4000/api";

$(function () {
  $("#header").load("header.html");
});

$.get(`${API_URL}/light`)
  .then((resp) => {
    resp.forEach((light) => {
      const deleteButton = `<button class="delete-light" data-id="${light._id}"><ion-icon name="trash-bin-outline"></ion-icon></button>`;
      $('#lights tbody').append(`
        <tr>
          <td>${light.name}</td>
          <td>${light.location}</td>
          <td>${deleteButton}</td>
        </tr>
      `);
      $('#light_container').append(`
      <div class="card">
            <div class="circle" style="  background-color: ${light.color};"></div>
                <h2>Name: ${light.name} </h2>
                <p>Location: ${light.location}</p>
                <p>Light State: ${light.state}</p>
                <p>Brightness: ${light.brightness}</p>
                <p>Light Mode: ${light.mode}</p>
        </div>
      `)
    });
  });

$.get(`${API_URL}/ac`)
  .then((resp) => {
    resp.forEach(acs => {
      const deleteButton = `<button class="delete-ac" data-id="${acs._id}"><ion-icon name="trash-bin-outline"></ion-icon></button>`;
      $('#acs tbody').append(`
            <tr>
              <td>${acs.name}</td>
              <td>${acs.location}</td>
              <td>${deleteButton}</td>
            `)
      $('#ac_container').append(`
            <div class="card">
                  <div class="${acs.state}"><div class="circle"><ion-icon class="${acs.speed}" style="font-size:45px; color:#7289da;" name="help-buoy-outline"></ion-icon></div></div>
                      <h2 >Name: ${acs.name} </h2>
                      <p>Location: ${acs.location}</p>
                      <p>Ac State: ${acs.state}</p>
                      <p>Temperature: ${acs.temperature}</p>
                      <p>Ac Mode: ${acs.mode}</p>
                      <p>Ac speed: ${acs.speed}</p>
              </div>
            `)
    });
  })

$.get(`${API_URL}/security`)
  .then((resp) => {
    resp.forEach(security => {
      const deleteButton = `<button class="delete-security" data-id="${security._id}"><ion-icon name="trash-bin-outline"></ion-icon></button>`;
      $('#security tbody').append(`
            <tr>
              <td>${security.name}</td>
              <td>${security.location}</td>
              <td>${deleteButton}</td>
            `)
            $('#security_container').append(`
            <div class="card">
            <div class="circle"  style=" color:#7289da; display: inline; font-size: 35px;"><span class="${security.alarm}"><ion-icon style="margin: 0 10px ;"  name="alarm-outline"></ion-icon></span><span class="${security.camera}"><ion-icon style="margin: 0 10px ;" name="videocam-outline"></ion-icon></span></div>
                <h2>Name: ${security.name} </h2>
                <p>Location: ${security.location}</p>
                <p>Camera: ${security.camera}</p>
                <p>Mode: ${security.mode}</p>
                <p>Alarm: ${security.alarm}</p>
        </div>
            `)
    });
  })



$('#add_light').on('click', (event) => {
  event.preventDefault();
  const name = $('#light_name').val();
  const location = $('#light_location').val();
  const state = $('#light_state').val();
  const color = $('#light_color').val();
  const brightness = $('#light_level').val();
  const mode = $('#light_mode').val();


  const body = { name, location, state, color, brightness, mode };
  console.log(body);

  $.post(`${API_URL}/light`, body)

    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.log(error)
    })
  window.location.href = '/light'
})

$('#update_light').on('click', (event) => {
  event.preventDefault();
  const name = $('#l_name').val();
  const location = $('#l_location').val();
  const state = $('#l_state').val();
  const color = $('#l_color').val();
  const brightness = $('#l_level').val();
  const mode = $('#l_mode').val();


  const body = { name, location, state, color, brightness, mode };
  console.log(body);

  $.ajax({
    url: `${API_URL}/light`,
    type: 'PUT',
    data: body,
    success: function (result) {
      console.log('light updated sucessfully');
    },
    error: function (error) {
      console.error('Error updating light:', error);
    }
  });
  window.location.reload();
})

$('#add_ac').on('click', (event) => {
  event.preventDefault();
  const name = $('#ac_name').val();
  const location = $('#ac_location').val();
  const state = $('#ac_state').val();
  const temperature = $('#temperature').val();
  const mode = $('#ac_mode').val();
  const speed = $('#fan_speed').val();

  console.log(name, location, state, temperature, mode, speed);

  const body = { name, location, state, temperature, mode, speed };

  $.post(`${API_URL}/ac`, body)

    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.log(error)
    })
  window.location.href = '/ac'
})

$('#update_ac').on('click', (event) => {
  event.preventDefault();

  const name = $('#a_name').val();
  const location = $('#a_location').val();
  const state = $('#a_state').val();
  const temperature = $('#a_temperature').val();
  const mode = $('#a_mode').val();
  const speed = $('#f_speed').val();

  console.log(name, location, state, temperature, mode, speed);

  const body = { name, location, state, temperature, mode, speed };

  $.ajax({
    url: `${API_URL}/ac`,
    type: 'PUT',
    data: body,
    success: function (result) {
      console.log('ac updated sucessfully');
    },
    error: function (error) {
      console.error('Error updating ac:', error);
    }
  });
  window.location.reload();
})

$('#add_security').on('click', (event) => {
  event.preventDefault();
  const name = $('#security_name').val();
  const location = $('#security_location').val();
  const camera = $('#camera').val();
  const mode = $('#security_mode').val();
  const alarm = $('#alarm_sensitivity').val();

  console.log(name, location, camera, mode, alarm);

  const body = { name, location, camera, mode, alarm }

  $.post(`${API_URL}/security`, body)

    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.log(error)
    })
  window.location.href = '/security'
})

$('#update_security').on('click', (event) => {
  event.preventDefault();
  const name = $('#s_name').val();
  const location = $('#s_location').val();
  const camera = $('#cam').val();
  const mode = $('#s_mode').val();
  const alarm = $('#a_sensitivity').val();

  console.log(name, location, camera, mode, alarm);

  const body = { name, location, camera, mode, alarm }

  $.ajax({
    url: `${API_URL}/security`,
    type: 'PUT',
    data: body,
    success: function (result) {
      console.log('security updated sucessfully');
    },
    error: function (error) {
      console.error('Error updating security:', error);
    }
  });
  window.location.reload();
})

$(document).on('click', '.delete-light', function () {

  const lightId = $(this).data('id');
  const deleteUrl = `${API_URL}/light/${lightId}`;

  console.log(deleteUrl);

  $.ajax({
    url: deleteUrl,
    type: 'DELETE',
    success: function (result) {
      console.log('Light deleted successfully');
    },
    error: function (error) {
      console.error('Error deleting light:', error);
    }
  });
  window.location.reload();
});

$(document).on('click', '.delete-ac', function () {

  const acId = $(this).data('id');
  const deleteUrl = `${API_URL}/ac/${acId}`;

  console.log(deleteUrl);

  $.ajax({
    url: deleteUrl,
    type: 'DELETE',
    success: function (result) {
      console.log('ac deleted successfully');
    },
    error: function (error) {
      console.error('Error deleting ac:', error);
    }
  });
  window.location.reload();
});

$(document).on('click', '.delete-security', function () {

  const secId = $(this).data('id');
  const deleteUrl = `${API_URL}/security/${secId}`;

  console.log(deleteUrl);

  $.ajax({
    url: deleteUrl,
    type: 'DELETE',
    success: function (result) {
      console.log('security deleted successfully');
    },
    error: function (error) {
      console.error('Error deleting security:', error);
    }
  });
  window.location.reload();
});