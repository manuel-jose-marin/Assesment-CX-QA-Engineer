import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const OpenDemoQaHome = () =>
    Task.where(`#actor opens the DemoQA home page`,
        Navigate.to('https://demoqa.com/'),
    );
