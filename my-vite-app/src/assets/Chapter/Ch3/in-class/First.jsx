import { PermissionConsumer } from "./PermissionProvider";

export function First(){
    return(
        <PermissionConsumer name="first">
            <div>First</div>
        </PermissionConsumer>
    )
}
export function Second(){
    return(
        <PermissionConsumer name="second">
            <div>Second</div>
        </PermissionConsumer>
    )
}
export function Third(){
    return(
        <PermissionConsumer name="third">
            <div>Third</div>
        </PermissionConsumer>
    )
}
