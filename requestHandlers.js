function view() {
    console.log('requestHandler Called View');
}

function create() {
    console.log('requestHandler Called create');
}

let handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;
