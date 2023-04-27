import React, { useState } from "react";
import { ReactDOM } from "react";

export function app() {
    return (
        <div className="App">
            <label for="data" />
            Name:
            <input list="data"
                placeholder="Enter Name" />
        </div>
    )
}