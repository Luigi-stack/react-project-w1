import Dropdown from 'react-bootstrap/Dropdown';

function Home (movies) {
return (
    <div className="d-flex align-items-center mt-3 ms-5">
        <h2 className="me-3">Tv Shows</h2>
        <Dropdown>
      <Dropdown.Toggle className="square rounded-0" variant="dark outline-light" id="dropdown-basic">
        Geners
      </Dropdown.Toggle>

      <Dropdown.Menu className="square rounded-0" variant="dark outline-light">
        <Dropdown.Item href="#/action-1">Geners1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Geners2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Geners3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
)
}

export default Home