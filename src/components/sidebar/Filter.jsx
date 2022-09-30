import React from "react";

const Filter = ({ filter }) => {
    return (
        <aside className="aside-item filter-price">
            <div className="aside-title">
                <h2 className="title-head margin-top-0">
                    <span>{filter.title}</span>
                </h2>
            </div>
            <div className="aside-content filter-group">
                <ul>
                    {filter.options.map((option, index) => {
                        return (
                            <li
                                key={index}
                                className="filter-item filter-item--check-box filter-item--green"
                            >
                                <span>
                                    <label
                                        // data-filter="100-000d"
                                        htmlFor={option.id}
                                    >
                                        <input
                                            type="checkbox"
                                            id={option.id}
                                            value="(&lt;100000)"
                                        />
                                        {/* <i className="fa"></i> */}
                                        {option.value}
                                    </label>
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Filter;
