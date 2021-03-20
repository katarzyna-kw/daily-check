import '../App.css';

function Survey() {
  const surveyHello = 'How are you feeling today?';
  return (
    <div className="wrapper-survey">
        <p>
        {surveyHello}
        </p>
        <form>
          <label>
            Date: 
          </label>
          <input type="text" />
          <label>
            Morning Mood: 
          </label>
          <input type="text" />

        </form>
    </div>
  );
}

export default Survey;