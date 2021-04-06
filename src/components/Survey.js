import '../App.css';

function Survey() {
  return (
    <div class="container-survey">
    <div className="wrapper-survey">
        <form className="form">
          <label className="label">
            Date
          </label>
          <input className="input" type="text" />
          <br></br>
          <label className="label">
            Mood
          </label>
          <input className="input" type="text" />
          <br></br>
          <div className="buttonWrapper">
            <button>submit</button>
          </div>
        </form>
    </div>
    </div>
  );
}

export default Survey;