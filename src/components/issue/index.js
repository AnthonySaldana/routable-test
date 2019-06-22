import React, { Fragment } from 'react';
import Layout from '../../layouts/default';
import './issue.scss';

export default class repos extends React.Component {
    allowDrop = (ev) => {
        ev.preventDefault();
    }
    
    drag = (ev) => {
        ev.dataTransfer.setData("id", ev.target.id);
    }
    
    drop = (ev) => {
        const { reorderIssues } = this.props;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        if( data !== ev.target.id ) {
            ev.target.insertAdjacentElement('afterend', document.getElementById(data));
            reorderIssues(data, ev.target.id);
        }
    }

    render() {
        const { issue } = this.props;

        return (
            <div
                id={issue.id}
                className="issueCard"
                draggable="true"
                onDragStart={(e) => this.drag(e)}
                onDrop={(e) => this.drop(e)}
                onDragOver={ (e) => this.allowDrop(e) }
            >
                { issue.title }
            </div>
        );
    }
}
