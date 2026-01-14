import { Component } from '@angular/core';
import { DashboardNavbarComponent } from "../../../components/dashboard-navbar/dashboard-navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-message',
    imports: [DashboardNavbarComponent, CommonModule, FormsModule],
    templateUrl: './message.component.html'
})
export class MessageComponent {

  isOffcanvasOpen = false;
  isDropdownOpen = false;
  isDropdownOpen2 = false;
  ccCollapsed = true;
  bccCollapsed = true;


  toEmail: string = 'rainbowsales@inquiry.com';
  ccEmail: string = 'zoonwala@inquiry.com';
  bccEmail: string = 'mojobdltd@inquiry.com';
  messageContent: string = `Hi, Mary Cooper!
  
  Thanks for your invitation for the account manager position for your company. I will get back to you soon with all the required documents.`;


  emailList = [
    {
      senderName: 'Jenny Rio.',
      date: 'Aug 22',
      subject: 'Work inquiry from google.',
      text: 'Hello, This is Jenny from google. We’re the largest online platform offer...',
      attachments: ['details.pdf'],
      isRead: true,
      isPrimary: false,
      isSelected: false
    },
    {
      senderName: 'Hasan Islam.',
      date: 'May 22',
      subject: 'Account Manager',
      text: 'Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..',
      attachments: ['details.pdf', 'form.pdf'],
      isRead: false,
      isPrimary: true,
      isSelected: true
    },
    {
      senderName: 'Jannatul Ferdaus.',
      date: 'Jun 22',
      subject: 'Product Designer Opportunities',
      text: 'Hello, This is Jannat from HuntX. We offer business solution to our client..',
      attachments: [],
      isRead: false,
      isPrimary: false,
      isSelected: false
    },
    {
      senderName: 'Jakie Chan',
      date: 'NOV 22',
      subject: 'Hunting Marketing Specialist',
      text: 'Hello, We’re the well known Real Estate Inc provide best interior/exterior solut...',
      attachments: [],
      isRead: true,
      isPrimary: false,
      isSelected: false
    },
    {
      senderName: 'Jakie Chan',
      date: 'NOV 22',
      subject: 'Hunting Marketing Specialist',
      text: 'Hello, We’re the well known Real Estate Inc provide best interior/exterior solut...',
      attachments: [],
      isRead: true,
      isPrimary: false,
      isSelected: false
    },
    {
      senderName: 'Jakie Chan',
      date: 'NOV 22',
      subject: 'Hunting Marketing Specialist',
      text: 'Hello, We’re the well known Real Estate Inc provide best interior/exterior solut...',
      attachments: [],
      isRead: true,
      isPrimary: false,
      isSelected: false
    }
  ];
  filteredEmails = this.emailList;
  selectedFilter = 'All';


  openOffcanvas() {
    this.isOffcanvasOpen = true;
  }

  closeOffcanvas() {
    this.isOffcanvasOpen = false;
  }


  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleDropdown2(): void {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }


  toggleSection(section: 'cc' | 'bcc'): void {
    if (section === 'cc') {
      this.ccCollapsed = !this.ccCollapsed;
    } else if (section === 'bcc') {
      this.bccCollapsed = !this.bccCollapsed;
    }
  }


  filterEmails(filter: string): void {
    this.selectedFilter = filter;

    switch (filter) {
      case 'All':
        this.filteredEmails = this.emailList;
        break;
      case 'Read':
        this.filteredEmails = this.emailList.filter(email => email.isRead);
        break;
      case 'Unread':
        this.filteredEmails = this.emailList.filter(email => !email.isRead);
        break;
      case 'Primary':
        this.filteredEmails = this.emailList.filter(email => email.isPrimary);
        break;
      default:
        this.filteredEmails = this.emailList;
        break;
    }
  }


  clearEmailContent(): void {
    this.messageContent = '';
  }

  clearTextarea(): void {
    this.messageContent = '';
  }

  chatMessages: Array<any> = [];

  ngOnInit(): void {
    this.chatMessages = [
      { sender: 'system', message: 'Payment Verification', type: 'initial' },
      { sender: 'system', message: 'Hello, Greeting from Uber...', type: 'initial' },
      { sender: 'system', message: 'What we need from you to start:', type: 'initial' },
      { sender: 'system', message: '- Your CV', type: 'initial' },
      { sender: 'system', message: '- Verified Gov ID', type: 'initial' },
      { sender: 'system', message: 'After that we need to redesign our landing page...', type: 'initial' },
      { sender: 'system', message: 'Thank you!', type: 'initial' }
    ];
  }
  // Function to send the message when the "Enter" key is pressed
  sendMessage(): void {
    if (this.messageContent.trim()) {
      this.chatMessages.push({
        sender: 'user',
        message: this.messageContent,
        type: 'sent'
      });
      this.messageContent = ''; // Reset message content after sending
    }
  }
}
