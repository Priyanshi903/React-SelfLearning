// custom wrapper class to avoid <div> as a top parent node in various return method of components

const Wrapper = props => {
    return props.children
};

export default Wrapper;