import React, { Component } from 'react';
import { Button, Popup, Grid, Image, Divider, Segment, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './ResultPage.css';
import * as data from "./ResultImg"

class ResultPage extends Component {
    state = {
        checked : true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: true,
        checked9: true,
        unclicked: data.unclicked,
        clicked: data.clicked
    }
    handleCheck = (event) => {
        var value = { value: event.target.value }
        if (value.value === "pr") {
            this.setState(
                { checked: !this.state.checked }
            );
        } else if (value.value === "ca") {
            this.setState(
                { checked1: !this.state.checked1 }
            );
        }
        else if (value.value === "sc") {
            this.setState(
                { checked2: !this.state.checked2 }
            );
        } else if (value.value === "hs") {
            this.setState(
                { checked3: !this.state.checked3 }
            );
        } else if (value.value === "ci") {
            this.setState(
                { checked4: !this.state.checked4 }
            );
        } else if (value.value === "con") {
            this.setState(
                { checked5: !this.state.checked5 }
            );
        } else if (value.value === "po") {
            this.setState(
                { checked6: !this.state.checked6 }
            );
        } else if (value.value === "fr") {
            this.setState(
                { checked7: !this.state.checked7 }
            );
        } else if (value.value === "su") {
            this.setState(
                { checked8: !this.state.checked8 }
            );
        } else if (value.value === "cc") {
            this.setState(
                { checked9: !this.state.checked9 }
            );
        }
    }
    render() {
        const { checked, checked1, checked2, checked3, checked4, checked5, checked6, checked7, checked8, checked9 } = this.state
        const { unclicked, clicked } = this.state

        return (
            <div>
                {/* {checked ? (<h5>{unclicked[0].text}</h5>) : <h5>{unclicked[0].text}선택 안함</h5>}
                {checked1 ? (<h5>{unclicked[1].text}</h5>) : <h5>{unclicked[1].text}선택 안함</h5>}
                {checked2 ? (<h5>{unclicked[2].text}</h5>) : <h5>{unclicked[2].text}선택 안함</h5>}
                {checked3 ? (<h5>{unclicked[3].text}</h5>) : <h5>{unclicked[3].text}선택 안함</h5>}
                {checked4 ? (<h5>{unclicked[4].text}</h5>) : <h5>{unclicked[4].text}선택 안함</h5>} */}
                <Popup trigger={<Button>조건 선택</Button>} position='bottom center' on='click' hideOnScroll>
                    <div className="popupDiv"></div>
                    {checked ? (<font>{unclicked[0].text}</font>) : <font>{unclicked[0].text}선택 안함</font>}, {checked1 ? (<font>{unclicked[1].text}</font>) : <font>{unclicked[1].text}선택 안함</font>}
                    , {checked2 ? (<font>{unclicked[2].text}</font>) : <font>{unclicked[2].text}선택 안함</font>}, {checked3 ? (<font>{unclicked[3].text}</font>) : <font>{unclicked[3].text}선택 안함</font>}
                    , {checked4 ? (<font>{unclicked[4].text}</font>) : <font>{unclicked[4].text}선택 안함</font>}, {checked5 ? (<font>{unclicked[5].text}</font>) : <font>{unclicked[5].text}선택 안함</font>}
                    <Divider fitted />
                    <Grid centered divided columns={1}>
                        <Grid.Column textAlign='center'>
                            <ul className="imgUl">
                                <li><label className="theme1">
                                    <input type="checkbox" id="pr" value="pr" onChange={this.handleCheck} defaultChecked={checked} />
                                    {checked ? (<Image src={clicked[0]} size="tiny" centered />) : (<Image src={unclicked[0].value} size="tiny" centered />)}
                                    <span className="theme_name">버스</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="ca" value="ca" onChange={this.handleCheck} defaultChecked={checked1} />
                                    {checked1 ? (<Image src={clicked[1]} centered />) : (<Image src={unclicked[1].value} size="tiny" centered />)}
                                    <span className="theme_name">카페</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="sc" value="sc" onChange={this.handleCheck} defaultChecked={checked2} />
                                    {checked2 ? (<Image src={clicked[2]} size="tiny" centered />) : (<Image src={require("../image/school_un.png")} size="tiny" centered />)}
                                    <span className="theme_name">학교</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="hs" value="hs" onChange={this.handleCheck} defaultChecked={checked3} />
                                    {checked3 ? (<Image src={clicked[3]} size="tiny" centered />) : (<Image src={unclicked[3].value} size="tiny" centered />)}
                                    <span className="theme_name">병원</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="ci" value="ci" onChange={this.handleCheck} defaultChecked={checked4} />
                                    {checked4 ? (<Image src={clicked[4]} size="tiny" centered />) : (<Image src={unclicked[4].value} size="tiny" centered />)}
                                    <span className="theme_name">영화관</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="con" value="con" onChange={this.handleCheck} defaultChecked={checked5} />
                                    {checked5 ? (<Image src={clicked[5]} size="tiny" centered />) : (<Image src={unclicked[5].value} size="tiny" centered />)}
                                    <span className="theme_name">편의점</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="po" value="po" onChange={this.handleCheck} defaultChecked={checked6} />
                                    {checked6 ? (<Image src={clicked[6]} size="tiny" centered />) : (<Image src={unclicked[6].value} size="tiny" centered />)}
                                    <span className="theme_name">경찰서</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="fr" value="fr" onChange={this.handleCheck} defaultChecked={checked7} />
                                    {checked7 ? (<Image src={clicked[7]} size="tiny" centered />) : (<Image src={unclicked[7].value} size="tiny" centered />)}
                                    <span className="theme_name">소방서</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="su" value="su" onChange={this.handleCheck} defaultChecked={checked8} />
                                    {checked8 ? (<Image src={clicked[8]} size="tiny" centered />) : (<Image src={unclicked[8].value} size="tiny" centered />)}
                                    <span className="theme_name">대형마트</span>
                                </label>
                                </li>
                                <li><label className="theme1">
                                    <input type="checkbox" id="cc" value="cc" onChange={this.handleCheck} defaultChecked={checked9} />
                                    {checked9 ? (<Image src={clicked[9]} size="tiny" centered />) : (<Image src={unclicked[9].value} size="tiny" centered />)}
                                    <span className="theme_name">cctv</span>
                                </label>
                                </li>
                            </ul>
                            <Button>얘 할일없을듯</Button>
                        </Grid.Column>
                    </Grid>
                </Popup>
                <div className="dealTypeDiv">
                <Segment raised>
                    <Grid>
                        <Grid.Column width={4}>
                            <Image src={require('../image/officetel.PNG')} />
                        </Grid.Column>
                        <Grid.Column width={9}>
                        <Label circular>월세</Label><h2 className="title"><font color="orange">3000/40</font></h2><h4 className="title">(23㎡)</h4>
                            <font color="grey"><h4>서울시 종로구 ...</h4>
                            <h4>오피스텔</h4></font>
                        </Grid.Column>
                    </Grid>
                </Segment>
                </div>
                
            </div>
        );
    }
}

export default ResultPage;