import React from "react";
import Sample from './page/Sample';

import { Provider } from './module/sampleContext'

const Index = (props) => {
    return (
        <Provider>
            <Sample mber={props.mber || {}} cmnt_se_cd={props.cmnt_se_cd} cmnt_loc_no={props.cmnt_loc_no} />
        </Provider>
    )
};

export default Index;
