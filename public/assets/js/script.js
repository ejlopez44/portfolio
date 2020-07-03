$(document).ready(function () {


    // POST projects
    $("#postProjectForm").on("submit", (event) => {
        event.preventDefault();
        let project = ($('form').serializeArray())
        // project.push({UserId: 1})
        // project.push({UserId: req.user.id})

        console.log(project)
        // prevent submission without a completed form
        // if (!$('input').val()) {
        //     console.log('Check all fields')
        //     return;
        // }
        // // call our post user function, if there is an error on the server side, be sure to respond back to the user that it didnt work and why
        submitProject(project)
    })
    // POST new user registration to DB
    const submitProject = (project) => {
        $.post('/api/project', project, () => {
            // NEED TO FIGURE OUT THIS ERROR HANDLING.. IT DOESNT WORK https://api.jquery.com/ajaxError/
            // if (err) {
            //     console.log('The email address already has an account tied to it')
            // }
            window.location.href = "/";
        })
    }

    // EDIT (PUT) Projects
    function submitEdits() {
        let project = ($('#editProjectForm').serializeArray())
        let id = $(this).data('id')
        if (confirm(`Are you sure you want to commit changes to project ${id}?`)) {
            let editForm = $('form').serializeArray()
            console.log(editForm)
            $.ajax({
                method: 'PUT',
                url: `/api/project/${id}`,
                data: editForm
            }).then(res => {
                alert("Project successfully updated!")
                location.reload()
            }).fail(res => {
                alert("Server responded with an error")
            });
        }
        return;
    }

    $('#editProject').on('click', submitEdits)


    // DELETE Projects
    function removeProj() {
        // get id of button
        let id = $(this).data('id')
        if (confirm(`Are you sure you want to delete project ${id} from your portfolio?`)) {
            $.ajax({
                method: 'DELETE',
                url: `/api/project/${id}`,
            }).then(res => {
                alert("Project successfully deleted!")
                location.reload()
            }).fail(res => {
                alert("Server responded with an error")
            });
        }
        return;
    }
    $('.delProj').on('click', removeProj)
}) // End of Document Ready