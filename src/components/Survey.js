import '../App.css';

function Survey() {
  const goodMorning = 'Good morning, sunshine';
  return (
    <div class="container-survey">
    <div className="wrapper-survey">
        <p>
        {goodMorning}
        </p>
        <form className="form">
          <label className="label">
            Date: 
          </label>
          <input className="input" type="text" />
          <br></br>
          <label className="label">
            Mood: 
          </label>
          <input className="input" type="text" />
          <br></br>
          <button>submit</button>
        </form>
    </div>
    </div>
  );
}

export default Survey;