import '../App.css';

function Survey() {
  const goodMorning = 'Good morning, sunshine';
  return (
    <div className="wrapper-survey">
        <p>
        {goodMorning}
        </p>
        <form className="form">
          <label className="label">
            Date: 
          </label>
          <input type="text" />
          <br></br>
          <label className="label">
            Morning Mood: 
          </label>
          <input type="text" />
          <br></br>
          <button>submit</button>
        </form>
    </div>
  );
}

export default Survey;