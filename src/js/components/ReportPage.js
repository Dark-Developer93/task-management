import React, { Component } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDaysFromNow } from '../util/DateUtil';

export class ReportPage extends Component {
  componentDidMount() {
    const data = this.groupTaskByCategory();
    new Chart(this.canvasEl, {
      type: 'doughnut',
      data: {
        labels: this.getTaskCategories(),
        datasets: [
          {
            data,
            backgroundColor: ['#E0E0E0', '#FFC400', '#00E676', '#FF6384'],
            hoverBackgroundColor: ['#E0E0E0', '#FFC400', '#00E676', '#FF6384']
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Tasks due in 7 days'
        },
        animateScale: true,
        animateRotate: true
      }
    });
  }

  getTaskCategories() {
    const { tasks } = this.props;
    return tasks
      .reduce((accumulator, value) => {
        if (accumulator.indexOf(value.category) < 0) {
          accumulator.push(value.category);
        }
        return accumulator;
      }, [])
      .sort();
  }

  groupTaskByCategory() {
    const { tasks } = this.props;
    const taskCategories = this.getTaskCategories();
    return tasks.reduce((accumulator, task) => {
      if (!task.resolved) {
        const taskDueDateFromNow = getDaysFromNow(task.dueDate);
        if (taskDueDateFromNow <= 7) {
          const categoryIndex = taskCategories.indexOf(task.category);
          accumulator[categoryIndex] = ++accumulator[categoryIndex] || 1;
        }
      }
      return accumulator;
    }, []);
  }

  render() {
    return (
      <canvas ref={el => (this.canvasEl = el)} />
    );
  }
}

ReportPage.defaultProps = {
  tasks: []
};

ReportPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(
  mapStateToProps,
  null
)(ReportPage);
