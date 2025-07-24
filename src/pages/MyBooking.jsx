import React from 'react';
import Navbar from '../components/Navbar';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Clock, Ticket, MapPin, X, CheckCircle2, Film } from 'lucide-react';
import { dummyBookingData } from '../lib/assets';

const MyBooking = () => {
  const formatDate = (dateString) => {
    const options = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const getStatusBadge = (isPaid) => {
    const status = isPaid ? 'Confirmed' : 'Pending';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isPaid 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {isPaid ? (
          <CheckCircle2 className="h-3 w-3 mr-1" />
        ) : (
          <Clock className="h-3 w-3 mr-1" />
        )}
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
          
          {dummyBookingData.length === 0 ? (
            <div className="text-center py-12">
              <Ticket className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No bookings yet</h3>
              <p className="mt-1 text-sm text-gray-500">Your upcoming movie bookings will appear here.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {dummyBookingData.map((booking, index) => {
                const showDate = new Date(booking.show.showDateTime);
                const formattedDate = showDate.toLocaleDateString('en-IN', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                });
                const formattedTime = showDate.toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                }).toUpperCase();
                
                return (
                  <Card key={`${booking._id}-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="md:flex">
                      {/* Movie Poster */}
                      <div className="md:w-1/4 flex-shrink-0 min-h-[200px] relative">
                        {booking.show.movie.poster_path ? (
                          <img
                            src={booking.show.movie.poster_path} 
                            alt={booking.show.movie.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '';
                              e.target.parentElement.innerHTML = `
                                <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                                  <Film className="h-12 w-12 text-gray-400" />
                                </div>
                              `;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <Film className="h-12 w-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                      
                      {/* Booking Details */}
                      <div className="p-6 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                          <div>
                            <h2 className="text-xl font-bold">
                              {booking.show.movie.title}
                            </h2>
                            <div className="flex items-center mt-1 text-sm">
                              <span>English • {booking.show.movie.runtime || '120'} min</span>
                            </div>
                          </div>
                          <div className="mt-4 sm:mt-0 text-left sm:text-right">
                            <div className="text-2xl font-bold text-indigo-600">
                              ${booking.amount.toFixed(2)}
                            </div>
                            <div className="mt-1">
                              {getStatusBadge(booking.isPaid)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Theater</div>
                              <div className="text-gray-600">Cineplex Cinemas</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Date & Time</div>
                              <div className="text-gray-600">
                                {formattedDate} • {formattedTime}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            
                            <Ticket className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Seats</div>
                              <div className="text-gray-600">
                                {booking.bookedSeats.join(', ')}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="h-5 w-5 mr-2"></div>
                            <div>
                              <div className="font-medium">Booking ID</div>
                              <div className="text-gray-600 font-mono text-sm">
                                {booking._id}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button 
                            variant="outline" 
                            className="border-gray-300 hover:bg-gray-50"
                          >
                            View Ticket
                          </Button>
                          {!booking.isPaid && (
                            <Button 
                              className="bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyBooking;