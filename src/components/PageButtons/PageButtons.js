import React, { Component } from 'react';
import "./PageButtons.css";



export  class PageButtons extends Component {

    constructor(props) {
        super(props);
        this.onPageBtnClick = this.onPageBtnClick.bind(this);
        this.onPrevBtnClick = this.onPrevBtnClick.bind(this);
        this.onNextBtnClick = this.onNextBtnClick.bind(this);
    }

    componentDidMount() {

    }


    onPageBtnClick(event) {
        this.props.onPageChange(event.target.value);
    }

    onPrevBtnClick(event) {
        if (this.props.currentPage == 0) {
            return;
        }
        else {
            this.props.onPageChange(this.props.currentPage - 1);
        }
    }

    onNextBtnClick(event) {
        var maxPage = Math.floor(this.props.size / 10);
        if (this.props.currentPage >= maxPage - 1) {
            return;
        }
        else {
            this.props.onPageChange(this.props.currentPage + 1);
        }
    }


    render() {

        var pageButtons = [];
        var pageCount = 0;
        for (var i = 0; i < this.props.size;i++) {
            if (i % 10 == 0) {
                if (i / 10 == this.props.currentPage) {
                    pageButtons.push(
                        <button className="button-selected" onClick={this.onPageBtnClick} value={pageCount}>{pageCount + 1}</button>
                    );
                }
                else {
                    pageButtons.push(
                        <button onClick={this.onPageBtnClick} value={pageCount}>{pageCount + 1}</button>
                    );
                }
                pageCount++;
            }
        }

        return (
            <div>

                <button onClick={this.onPrevBtnClick}>Prev</button>
                {pageButtons}
                <button onClick={this.onNextBtnClick}>Next</button>
            </div>
        );
    }
}


