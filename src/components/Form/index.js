import React from 'react'

const Form = () => {
    return (
        <div class="card mt-2 w-100 h-100">
            <div class="card-body">
                <h1 class="border-bottom border-dark">Contact</h1>
                <div class="row">
                    <div class="col-md-12 text-left">
                        <form>
                            <div class="form-group">
                            <label for="InputName1">Name</label>
                            <input
                                type="name"
                                class="form-control"
                                id="InputName1"
                            />
                            </div>
                            <div class="form-group">
                            <label for="InputEmail1">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name@example.com"
                            />
                            </div>
                            <div class="form-group">
                            <label for="Message1">Message</label>
                            <textarea
                                class="form-control"
                                id="Message1"
                                rows="3"
                            ></textarea>
                            </div>
                            <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="Subscribe1"
                            />
                            <label class="form-check-label" for="Subscribe1"
                                >Subscribe</label
                            >
                            </div>
                            <button type="submit" class="btn btn-primary">
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;