import React, { Component } from 'react'

export default class Calendar extends Component {
    render() {
        return (
            <table class="table"  onClick={this.props.pickDate}>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
