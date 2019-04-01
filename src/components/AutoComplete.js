const sitcoms = ['Friends', 'The Big Bang Theory', 'Modern Family', 'Brooklyn Nine-Nine', 'The Simpsons', 'New Girl', 'Family Guy', 'South Park', 'The Goldbergs', 'Mom', 'Archer', 'Fresh Off the Boat', 'Black-ish', 'Veep', 'Orange Is the New Black', 'Unbreakable Kimmy Schmidt', 'Rick and Morty', 'Louie', 'American Dad', 'Silicon Valley'];

class Autocomplete extends React.Component {
  
    constructor() {
    super();
    this.state = {
      list: [],
      isEmpty: true,
      text: ''
    }

    this.onType = this.onType.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.clearText = this.clearText.bind(this);
  }
  
  componentWillMount() {
    this.setState({ list: sitcoms.sort().slice() });
  }
  
  openDialog() {
    $('.dialog').addClass('open');
  }
  
  onType(str, wasClicked) {
    let isEmpty = !str.length;
    let tempList = sitcoms.sort();

    if (wasClicked) {
      tempList = tempList.filter(s => s.includes(str));

    } else {
      str = str.toLowerCase();
      tempList = tempList.filter(s => s.toLowerCase().includes(str));
    }    
    
    this.setState({
      list: tempList,
      isEmpty: isEmpty,
      text: str
    });
  }
  
  closeDialog() {
    $('.dialog').removeClass('open');
  }
  
  clearText() {
    this.setState({
      list: sitcoms.sort().slice(),
      isEmpty: true,
      text: ''
    });    
  }
  
  render() {
    let {list, isEmpty, text} = this.state;
    
    let cancel = !isEmpty ? 
        <span className="cancel" 
          onClick={() => {
            this.clearText();
            /*
            there are problem below: state does not have enough time
            to have been updated. I don't understand WHY
            */
            setTimeout(() => this.openDialog(), 25);
          }}>Cancel</span> : null;
    
    return (
      <div className="body" onClick={this.closeDialog}>
        <div className="autocomplete">
          <input 
            type="text" 
            placeholder="What is your favorite sitcom?" 
            value={text}
            onClick={(e) => {
              this.openDialog();
              e.stopPropagation();
            }} 
            onChange={(e) => this.onType(e.target.value)}
            />

          {cancel}
          
          <div className="dialog" onClick={(e) => this.onType(e.target.textContent, true)}>
            {list.map(val => <div>{val}</div>)}
          </div>
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Autocomplete/>,
  document.getElementById('root')
);