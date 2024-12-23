import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page14() {
    return (
        <div className="container">
            <h1 className="my-4">Page 14</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Card Title 1</h5>
                            <p className="card-text">This is a sample card using Bootstrap.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Card Title 2</h5>
                            <p className="card-text">This is another sample card using Bootstrap.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@johndoe</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jane</td>
                                <td>Smith</td>
                                <td>@janesmith</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
