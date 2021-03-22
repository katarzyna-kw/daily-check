import '../App.css';

function Survey() {
  const goodMorning = 'Good morning, sunshine';
  return (
    <div className="wrapper-survey">
        <p>
        {goodMorning}
        </p>
        <form>
          <label>
            Date: 
          </label>
          <input type="text" />
          <br></br>
          <label>
            Morning Mood: 
          </label>
          <input type="text" />
          <button>submit</button>
        </form>
    </div>
  );
}

export default Survey;