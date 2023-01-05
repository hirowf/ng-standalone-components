import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: ` <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                routerLink="/dashboard"
                RouterLinkActive="bg-gray-900"
                class="text-white px-3 py-2 hover:bg-gray-700 rounded-md text-sm font-medium"
                aria-current="page"
                >Dashboard</a
              >

              <a
                routerLink="/currency-converter"
                RouterLinkActive="bg-gray-900"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Currency Converter</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>`,
  imports: [RouterLink, RouterLinkActive],
  styles: [
    `
      .active {
        background-color: red;
      }
    `,
  ],
})
export class Nav {}
