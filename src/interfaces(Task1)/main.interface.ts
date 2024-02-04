import {ILaunchSite} from "./launchSite.interface";
import {ILinks} from "./links.interface";
import {IRocket} from "./rocket.interface";

export interface IMain {
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunchSite;
    links: ILinks;
    rocket: IRocket;
}