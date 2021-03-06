import React,{PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
    static getDerivedStateFromProps(props,state){
        console.log('Persons JS getDerivedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('persons js shouldComponentUpdate',nextProps)
        return true;
    }

    getSnapshotBeforeUpdate(prevprops,prevState){
        console.log('persons js getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('persons js componentDidUpdate')
    }
    render() {
        console.log(`persons js render`);

        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                 />

        })
    }
}


export default Persons;